# Troubleshooting mods

General advice on how to troubleshoot The Witcher 3 mods.

When trying to find an issue, the fastest way is typically bisecting your mod list, then confirming with isolation testing.

## Bisecting mods

Finding _possible_ causes of issues.

1. Remove half the mods from your game directory.
1. Test.
1. If the problem goes away, swap to the other half.
1. Test.
1. Repeat the above steps until you have narrowed it down completely.

## Isolation testing

To actually confirm whether a mod is causing a problem, both must be checked:

1. Test without the mod - does the problem still occur?
1. Test with _only_ the mod - does the problem still occur when there are **no other mods** installed?

Most of the time, this will confirm a single mod causing the issue.

## Manual installation

Open the mod zip. If it contains any or all of the following folders, manual install just means copying them directly into the game directory.

- `bin`
- `dlc`
- `mods`

## Clean uninstall

If you had it installed previously, remove the mod directories from:

1. `Mods`
2. `dlc`

And remove the config (mod menu XML) from:

- `bin\config\r4game\user_config_matrix\pc`
