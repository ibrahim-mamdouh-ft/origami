import {Header} from './header-default';
import {HeaderProps} from './Props';
import {HeaderWrapper} from './top';
import {Drawer} from './drawer';
import {StickyHeader} from './sticky';
import {LogoOnlyHeader} from './logo-only';
import {NoOutboundLinks} from './no-outbound-links';

export function DefaultHeader(props: HeaderProps) {
	const {
		data,
		showLogoLink,
		showMegaNav,
		showStickyHeader,
		showSubNavigation,
		showUserNavigation,
		userIsLoggedIn,
		userIsSubscribed,
		variant,
	} = props;

	const includeUserActionsNav = showUserNavigation && !userIsLoggedIn;
	const includeSubNavigation =
		showSubNavigation && (data.breadcrumb || data.subsections);

	const defaultHeaderProps = {
		includeUserActionsNav,
		includeSubNavigation,
		showLogoLink,
		showUserNavigation,
		userIsLoggedIn,
		showMegaNav,
		userIsSubscribed,
		variant,
		data,
	};

	const stickyHeaderProps = {
		userIsLoggedIn,
		showUserNavigation,
		userIsSubscribed,
		includeUserActionsNav,
		data,
	};

	return (
		<>
			<HeaderWrapper variant={variant}>
				<Header {...defaultHeaderProps} />
			</HeaderWrapper>
			{showStickyHeader && <StickyHeader {...stickyHeaderProps} />}
			<Drawer
				data={data}
				userIsLoggedIn={userIsLoggedIn}
				userIsSubscribed={userIsSubscribed}
			/>
		</>
	);
}

export function LogoOnly({
	showLogoLink,
	variant,
}: {
	showLogoLink?: boolean;
	variant?: string;
}) {
	return <LogoOnlyHeader variant={variant} showLogoLink={showLogoLink} />;
}

export function NoOutboundLinksHeader(props: HeaderProps) {
	return <NoOutboundLinks {...props} />;
}
