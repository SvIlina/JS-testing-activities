import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [],
        include: ['./tests/**/?(*.)+(spec|test).[t]s?(x)'],
        setupFiles: [
            './src/hooks/vitest-global-setup.ts'
        ],
        globalSetup: [
            './src/hooks/jwt-init.hook.ts'
        ],
        testTimeout: 60000
    }
});
