import { addParameters } from '@storybook/react';
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

const customViewports = {
    laptop: {
        name: 'Laptop',
        styles: {
            width: '1200px',
            height: '900px'
        }
    }
};


addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            // or ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
        defaultViewport: 'iphonexr',
    },
});
