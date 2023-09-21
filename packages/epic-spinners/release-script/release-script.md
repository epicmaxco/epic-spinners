# Release script

This document is about `release` script.

The script is meant to automate release procedure. So far it doesn't cover full release flow, but gets rid of some tedious procedures.

Here's what script does:

- perform checks if we can release (no uncommitted changes, correct branch);
- update version strings in files;
- add and push commit and tag;
- build library;
- publish library to npm.

### Repo root commands

Add script in your `package.json` file:

```ts
"scripts": {
  "release": "tsx release-script/release-script.ts"
}
```

You have the following command from repo root to simplify script usage:

> **Note**
> Run this commands with npm instead of yarn to prevent auth issues

```bash
npm run release
```

### Release types

|                     | **large** | **tiny**  |            **next**            |            **experimental**            |
| ------------------- | :-------: | :-------: | :----------------------------: | :------------------------------------: |
| **git tag**         |     +     |     +     |               -                |                   -                    |
| **dist tag**        | `latest`  | `latest`  |             `next`             |             `experimental`             |
| **dist version**    |  `1.2.0`  |  `1.2.1`  | `1.2.1-next-de4db33f-20220608` | `0.0.0-experimental-de4db33f-20220608` |
| **commits version** |     +     |     +     |               -                |                   -                    |
| **branch**          | `master`  | `develop` |           `develop`            |                  any                   |

- **large** - large release - we should advertize it and include fancy features;
- **tiny** - once-in-a-week release, includes all current features;
- **next** - release for each commit in `develop` branch;
- **experimental** - release for developer to showcase the build.

### Further development

Let's keep this script well documented and smooth to use. We want painless releases.
