import {useEffect} from "react";
import withHtml from 'origami-storybook-addon-html';
import javascript from '../main';
import {ResponsiveFlatTable} from "../src/tsx/table";
import {baseTableContents} from "./baseTableContents";
import {ComponentMeta} from "@storybook/react";
import {withDesign} from "storybook-addon-designs";

export default {
	title: 'Components/o-table/Responsive',
	component: ResponsiveFlatTable,
	decorators: [withDesign, withHtml],
	args: {
		horizontalLines: true,
		compact: false,
		stripes: false
	}
} as ComponentMeta<typeof ResponsiveFlatTable>;


export const TableWithResponsiveFlat = (args) => {
	useEffect(() => {
		javascript.init();
	})
	return <ResponsiveFlatTable {...args}>{baseTableContents}</ResponsiveFlatTable>
}
TableWithResponsiveFlat.bind({});
