import {withDesign} from 'storybook-addon-designs';
import {ConceptLink as ConceptLinkTemplate} from '../src/tsx/concept-button';
import './concept-button.scss';
import withHtml from 'origami-storybook-addon-html';

export default {
	title: 'Components/ft-concept-button',
	component: ConceptLinkTemplate,
	decorators: [withDesign, withHtml],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/MyHQ1qdwYyek5IBdhEEaND/FT-UI-Library?node-id=0%3A915',
		},
		html: {},
	},
	argTypes: {
		attributes: {
			control: false,
			table: {disable: true},
		},
		onClick: {
			control: false,
			table: {disable: true},
		},
	},
};

const ConceptLinkStory = args => {
	return (
		<ConceptLinkTemplate {...args} />
	);
};

export const ConceptPillLink = ConceptLinkStory.bind({});

ConceptPillLink.args = {
	label: 'Movies',
	href: '#movies',
};
