# Troubleshooting mods

General advice on how to troubleshoot The Witcher 3 mods.

When trying to find an issue, the fastest way is typically bisecting your mod list, then confirming with isolation testing.

## Bisecting mods

Finding _possible_ causes of issues.

1. Remove half the mods from your game directory
1. Test
1. If the problem goes away, swap to the other half
   - Test again
1. Repeat the above steps until you have narrowed it down completely

## Isolation testing

To actually confirm whether a mod is causing a problem, both must be checked:

1. Test without the mod - does the problem still occur?
1. Test with _only_ the mod - does the problem still occur when there are **no other mods** installed?

Most of the time, this will confirm a single mod causing the issue.

## Manual installation

Mod managers are great, but do introduce a bit of complexity. On occasion, they can cause issues - manual installation rules that out.

Most mods are quite simple, and just need to be copied into the game directory.

:::note
This method is for mod zips that only contain some/all of these folders: `bin`, `dlc`, `mods`
:::

1. Open the mod zip & copy the entire contents (the `bin`, `dlc`, and/or `mods` directories)
1. Paste the contents into your game directory, e.g. `C:\Games\The Witcher 3 Wild Hunt GOTY\`

## Clean uninstall

You can remove a mod from the game by removing the mod's subdirectory from your game directory (e.g. `C:\Games\The Witcher 3 Wild Hunt GOTY\`):

1. Open the game directory, e.g. `C:\Games\The Witcher 3 Wild Hunt GOTY\`
1. Open the `Mods` directory
1. Remove the `modModNameHere` directory
1. Repeat the above process for the `dlc` directory

If present, remove the mod menu XML from:

- `bin\config\r4game\user_config_matrix\pc\`

:::tip
If in doubt, check the contents of the zip that was used to install the mod - that will list everything that needs to be deleted.
:::
