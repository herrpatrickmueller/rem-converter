# CSS REM Converter
Convert all css rem values to a new base value

For example you have an existing project using rem units all over with a base font-size of 16px but for convience sake you prefere to work with a base font-size of 10px you could recaluclate them with this little script.

## Usage
1. Copy the script to your project
2. Change the config variables and entrypoint as needed
3. Run the script with `node ./path/to/the/scrips.js`
4. Change the base font-size: `html { font-size: 10px; }` an set the a default font-size in body, if not yet set: `body { font-size: 1.6rem; }`
5. Check the output of the script and make interventions if needed.
