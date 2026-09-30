# Building `.rsblob` files

`.rsblob`: a precompiled script blob.

The blob includes your scripts, and any other scripts it requires to run: base game scripts + shared dependencies.

Reference implementation: [Aeltoth](https://github.com/Aelto)'s [`compileblob.bat`](https://github.com/Aelto/tw3-random-encounters-reworked/blob/365a4d240274c325234809f0e84fe8d9573841ad/scripts/compileblob.bat).

## Arguments

| Argument           | Value                                                        |
| ------------------ | ------------------------------------------------------------ |
| First (positional) | Game scripts: `content\content0` from your Witcher 3 install |
| `-patch=""`        | Your mod's scripts                                           |
| `-out=""`          | Output directory for the `.rsblob`                           |

## Steps

1. `cd` into the REDkit `bin\x64_RedKit` directory - `wcc_lite` must be run from there.
1. Run `wcc_lite.exe compilescripts`:

```powershell
cd "C:\The Witcher 3 REDkit\bin\x64_RedKit"

.\wcc_lite.exe compilescripts `
  "C:\The Witcher 3 Wild Hunt GOTY\content\content0" `
  -out="C:\MyMod\build" `
  -patch="C:\MyMod\src"
```

::: tip
If your mod depends on scripts from another mod (e.g. Sharedutils):

1. Copy the base game scripts to a staging folder
1. Copy the dependency scripts into the staging folder

Use this staging folder instead of `content\content0`.

:::

## Output

`wcc_lite` writes `blob.rsblob` to the `-out` directory.
