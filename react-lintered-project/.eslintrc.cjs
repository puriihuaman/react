module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"eslint-config-prettier"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		eqeqeq: ["error", "always"],
		"no-empty-function": "error",
		"no-implicit-coercion": "warn",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-duplicate-enum-values": "warn",
	},
};
