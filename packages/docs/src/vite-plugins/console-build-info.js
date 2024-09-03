import { execSync } from 'child_process';

function getCommit () {
  if (process.env.RAILWAY_GIT_COMMIT_SHA) { // Railway
    return process.env.RAILWAY_GIT_COMMIT_SHA?.slice(0,7)
  }
  if (process.env.COMMIT_REF) { // Netlify
    return process.env.COMMIT_REF?.slice(0,7)
  }
  return execSync('git rev-parse --short HEAD').toString().trim()
}

function getBranch () {
  if (process.env.RAILWAY_GIT_BRANCH) { // Railway
    return process.env.RAILWAY_GIT_BRANCH
  }
  if (process.env.BRANCH) { // Netlify
    return process.env.BRANCH
  }
  execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

function getLocalGitInfo() {
  try {
    return {
      commit: getCommit(),
      branch: getBranch(),
    };
  } catch (error) {
    console.error('Failed to get local Git information:', error);
    return { commit: 'unknown', branch: 'unknown' };
  }
}

export default function consoleBuildInfo() {
  const gitInfo = getLocalGitInfo()

  return {
    name: 'console-build-info',
    enforce: 'pre',
    transformIndexHtml(html) {
      return {
        html,
        tags: [{
          tag: 'script',
          injectTo: 'head',
          attrs: { type: 'module' },
          children: `
            console.group('Build Info');
            console.log('project:', 'Quility B2B HQ');
            console.log('date:', '${new Date().toLocaleString()}');
            console.log('commit:', '${process.env.BITBUCKET_COMMIT?.slice(0, 7) || gitInfo.commit}');
            console.log('branch:', '${process.env.BITBUCKET_BRANCH || gitInfo.branch}');
            console.groupEnd();
          `
        }]
      }
    }
  };
}
