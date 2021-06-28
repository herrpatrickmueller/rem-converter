# CSS REM Converter
Convert all css rem values to a new base value

For example you have an existing project using hunderts of rem units based on a font-size of 16px. But for convience sake, you prefere to work with a base font-size of 10px. This script recaluclates all rem values based on a new base font-size.

## Usage
1. Copy the script to your project
2. Change the config variables and entrypoint as needed
3. Run the script with `node ./path/to/the/scrips.js`
4. Change the base font-size: `html { font-size: 10px; }` and set the a default font-size in body, if not set yet: `body { font-size: 1.6rem; }`
5. Check the output of the script and make interventions if needed.

## Known Issues
Any string containing "rem" is replaced with "NaNrem". Check the output carefully and look for "NaN" outputs!
