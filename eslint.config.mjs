import tseslint from 'typescript-eslint';
export default tseslint.config(
 {ignores:['node_modules/**','node_modules-pnpm-backup/**','.tools/**','dist/**','dist-api/**','data/**','test-results/**']},
 ...tseslint.configs.recommended,
 {rules:{'@typescript-eslint/no-unused-vars':['warn',{argsIgnorePattern:'^_',varsIgnorePattern:'^_'}],'@typescript-eslint/no-namespace':'off'}}
);
