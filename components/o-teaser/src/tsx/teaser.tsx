import Container from './container';
import Content from './content';
import CustomSlot from './custom-slot';
import Headshot from './headshot';
import Image from './image';
import Meta from './meta';
import RelatedLinks from './related-links';
import Status from './status';
import Standfirst from './standfirst';
import Title from './title';
import Video from './video';
import {media} from './concerns/rules';
import presets from './concerns/presets';
import {TeaserProps} from './props';



const Teaser = (props) => (
	<Container {...props}>
		<Content>
			{props.showMeta ? <Meta {...props} /> : null}
			{media(props) === 'video' ? <Video {...props} /> : null}
			{props.showTitle ? <Title {...props} /> : null}
			{props.showStandfirst ? <Standfirst {...props} /> : null}
			{props.showStatus ? <Status {...props} /> : null}
			{props.showCustomSlot ? <CustomSlot {...props} /> : null}
			{media(props) === 'headshot' ? <Headshot {...props} /> : null}
		</Content>
		{media(props) === 'image' ? <Image {...props} /> : null}
		{props.showRelatedLinks ? <RelatedLinks {...props} /> : null}
	</Container>
);

export {
	// Container,
	// Content,
	// CustomSlot,
	// Headshot,
	// Image,
	// Meta,
	// RelatedLinks,
	// Standfirst,
	// Status,
	Teaser,
	// Title,
	// Video,
	// presets,
};
