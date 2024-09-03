import { execSync } from 'child_process';

function getLocalGitInfo() {
  try {
    const commit = execSync('git rev-parse --short HEAD').toString().trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    return { commit, branch };
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
