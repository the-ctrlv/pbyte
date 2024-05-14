import { createGlobalStyle } from 'styled-components';

import { breakpoints, mqMax, colors } from 'shared';

export const GlobalStyle = createGlobalStyle`
	html,
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Krona One';
		font-weight: 400;

	}
	body {
		margin: 0;
		font-family: 'Inter';
		font-weight: 400;
		font-size: 18px;
		height: 100%;
		width: 100%;
		background-color: ${colors.light};
		color: ${colors.dark};
		&::-webkit-scrollbar {
			width: 0;
		}
	}
	p {
		font-family: 'Montserrat';
		font-weight: 600;
		font-size: 14px;
		line-height: 22px;
	}
	.logo {
		position: fixed;
	  top: 50px;
		opacity: 0;
	  left: 50px;
		z-index: 1080;
	  width: 125px;
	  height: 40px;
	  @media ${mqMax(breakpoints.md)} {
			top: 20px;
			left: 20px;
	  }
	}
	[data-scroll='true'] {
		opacity: 0;
		transition: all .5s ease;
		transform: translateY(150px);
		&.visible {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.btn-ellipse {
		font-family: 'Montserrat';
		font-weight: 700;
		display: block;
		width: 100%;
		max-width: 430px;
		height: 105px;
		display: flex;
		align-items: center;
		justify-content: center;
	  @media ${mqMax(breakpoints.md)} {
			width: 85%;
			font-size: 16px;
	  }
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 105px;
			pointer-events: none;
			background: url('/assets/icons/border-button.svg') center center/contain
				no-repeat;
			position: absolute;
		}
	  &--black {
			&::after {
				background: url('/assets/icons/border-button-black.svg') center center/contain
						no-repeat;
			}
	  }
	}
	.custom-cursor {
		position: absolute;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: #244269;
		transform: translate3d(-50%,-50%,0);
	}
	.numbered {
		position: relative;
		&::before {
			position: absolute;
			border-left: 1px solid ${colors.dark};
			transform: rotate(-90deg);
			padding-left: 5px;
			top: -34px;
			left: -6px;
			font-size: 18px;
		}
	}
	a {
		cursor: url('/assets/icons/mouse-dark.svg') 20 20, auto;
	}
	.section-dark {
		background-color: ${colors.dark};
		color: ${colors.light};
		a {
			cursor: url('/assets/icons/mouse-light.svg') 20 20, auto;
		}
		.numbered {
				&::before {
					border-left: 1px solid ${colors.light};
				}
			}
	}
	.section-dark, .section-light {
		&--ellipse {
			&::before {
				content: '';
				position: absolute;
				width: 20vw;
				border-radius: 100%;
				height: 20vw;
				filter: blur(120px);
			}
		}
	}
	.swiper-button-next, .swiper-button-prev {
		@media ${mqMax(breakpoints.xl)} {
		width: 100px;
		height: 100px;
		bottom: 0;
		&::after {
			content: '';
			background: url('/assets/icons/slider-arrow.svg') center center/cover no-repeat;
			height: 100%;
			width: 100%;
		}
		}
	}
  .swiper-button-next {
    &::after {
      transform: rotate(180deg);
    }
  }
	.section-light {
		cursor: url('/assets/icons/mouse-light.svg') 20 20, auto;
		&--ellipse {
			&::before {
				opacity: 0.5;
				background-color: ${colors.turqoise};
			}
		}
	}
	.section-dark {
		cursor: url('/assets/icons/mouse-dark.svg') 20 20, auto;
		&--ellipse {
			&::before {
				opacity: 0.5;
				background-color: ${colors.brandPurple};
			}
		}
	}
	.hamburger-menu {
		position: fixed;
		cursor: url('/assets/icons/mouse-dark.svg') 20 20, auto;
		top: 50px;
		right: 50px;
		opacity: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		z-index: 1080;
		height: 42px;
		width: 50px;
		&.light {
			.hamburger-menu__line {
				background-color: ${colors.dark};
			}
			&.active {
				.hamburger-menu__line {
					background-color: ${colors.light};
				}
			}
		}
		&__line {
			display: block;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #fff;
			transition: all 0.3s ease-in-out;
		&--1 {
			top: 33%;
		}
		&--2 {
			width: 50%;
			top: 66%;
		}
		}
		&:hover {
			.hamburger-menu__line {
				&--2 {
			    width: 100%;
				}
			}
		}
		&.active {
			.hamburger-menu__line {
				&:nth-child(1) {
					transform: rotate(25deg);
					top: 50%;
					transition: top 0.3s, transform 0.3s 0.3s, -webkit-transform 0.3s 0.3s;
				}
				&:nth-child(2) {
					width: 100%;
					transform: rotate(-25deg);
					top: 50%;
					bottom: 50%;
					transition: top 0.3s, transform 0.3s 0.3s, -webkit-transform 0.3s 0.3s;
		}
      }
    }
	@media ${mqMax(breakpoints.md)} {
		top: 20px;
		right: 20px;
	  }
	}
	.mouse-follow-wrapper {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		pointer-events: none;

		.mouse-follow {
			border-radius: 50%;
			position: absolute;
      border: 1px solid #fff;
			width: 148px;
			height: 148px;
			display: flex;
			justify-content: center;
			align-items: center;
			transform: translate3d(-50%,-50%,0);
			background-color: transparent;
			img {
				transform: rotate(-180deg);
				transition: all 0.3s ease;
			}
			&--left {
				img {
					transform: rotate(0deg);
				}
			}
		}
	}
	main {
		overflow: hidden;
		display: flex;
    	flex-direction: column;
	}
	input, textarea {
		outline: none;
		&:focus {
			outline: none;
		}
	}
	/* This has been moved to the various style sheets where it is used (as far as I can tell).
	 Temporarily leaving here as a comment for easy reference in case we discover one I missed.
	/* ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
		}
	} */
	a {
		color: inherit;
		text-decoration: none;
	}
	strong {
		font-weight: 700;
	}

	p {
		margin: 0;
	}

	* {
		box-sizing: border-box;
	}

	.flex-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.section-title {
		font-size: 50px;
		font-family: 'Krona One';
		font-weight: 700;
		text-transform: uppercase;
		line-height: 70px;
		span {
			font-weight: 300;
			font-style: italic;
		}
		@media ${mqMax(breakpoints.md)} {
			font-size: 30px;
			line-height: 36px;
		}
	}
	.section-title-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400px;
		color: #fff;
		h1 {
				position: relative;
				top: 40px;
		}
	}
	.content-start {
		transform: translateY(60px);
		opacity: 0;
		&--horizontal {
			opacity: 0;
			transform: translateX(-60px);
		}
	}
	.mouse-follow-container {
		position: relative;
	}
	.react-hover-observer {
		width: 100%;
		height: 100%;
	}
	.mouse-follow {
		position: relative;
		z-index: 1;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: ${colors.dark};
		.section-dark {
			background-color: transparent;
		}
		&.postage-dark {
			background-color: #0A080A;
			color: ${colors.light};
			.case-study__right__text {
				color: ${colors.light};
			}
			.mouse-follow__circle {
				filter: blur(150px);
				background-color: rgb(146, 160, 151);
			}
			>section {
				background-color: transparent;
			 }
		}
		&--light {
			background-color: ${colors.light};
			.section-light {
				background-color: transparent;
			}
			.mouse-follow__circle {
				background-color: ${colors.turqoiseCursor};
				&--wrapper {
					background-color: transparent;
				}
			}
		}
		&__wrapper {
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			pointer-events: none;
		}
		&__circle {
				left: 0;
				top: 0;
				background-color: ${colors.brandPurple};
				filter: blur(100px);
				border-radius: 50%;
				position: absolute;
				z-index: 1;
				width: 15vw;
				height: 15vw;
				display: flex;
				justify-content: center;
				align-items: center;
				transform: translate3d(-50%,-50%,0);
				transition: transform 0.5s ease;
				&--wrapper {
					background-color: transparent;
				}
			}
		&--light {
				background-color: #f3f3f3;
		}
    &--left {
      img {
					display: inline-block;
					transition: all 0.3s ease;
					transform: rotate(0deg);
				}
    }
		&.policy, &.postage {
			border-radius: 50px;
			overflow: visible;
			.mouse-follow__circle {
				filter: blur(150px);
			}
			@media ${mqMax(breakpoints.lg)} {
				border-radius: 20px;
			}
		}
		&.policy {
			background: linear-gradient(294.88deg, #0C244F -20.88%, #15689F 86.63%);
			.mouse-follow__circle {
				background-color: #71CBDE;
			}
		}
		&.postage {
			background-color: rgb(10, 7, 10);
			.mouse-follow__circle {
				background-color: rgb(146, 160, 151);
			}
		}
	}
	.scroll-down {
		position: absolute;
		left: 50%;
		transform: translate3d(-50%, 60px, 0);
		top: 0;
		display: flex;
		flex-flow: column;
		align-items: center;
		height: 100%;
		&__line {
			height: 115px;
			width: 1px;
			margin-bottom: 10px;
			background-color: rgba(255, 255, 255, 0.2);
			position: relative;
			border-radius: 10px;
			overflow: hidden;
			&__inner {
				position: absolute;
				top: -100%;
				display: block;
				background-color: #fff;
				width: 100%;
				height: 100%;
				-webkit-animation: scrollDown ease-in-out 2s infinite;
				-moz-animation: scrollDown ease-in-out 2s infinite;
				animation: scrollDown ease-in-out 2s infinite;
			}
			@keyframes scrollDown {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 1;
					top: 0;
				}
				100% {
					top: 100%;
					opacity: 0;
				}
			}
		}
		&__text {
			transform: rotate(90deg);
			display: flex;
			align-items: center;
			height: 77px;
			white-space: nowrap;
		}
		@media ${mqMax(breakpoints.xxl)} {
			left: 0;
			transform: translateX(0);
		}
	}
	.left-nav-pane {
		width: 250px;
		li {
			h2 {
				font-family: 'Krona One';
				font-weight: 600;
				font-size: 16px;
				text-transform: uppercase;
				margin-bottom: 24px;
				width: 100%;
				position: relative;
				padding: 7px 0;
				overflow: hidden;
				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 100%;
					width: 2px;
					height: 100%;
					/* background-color: #798C7F; */
				}
			}
			&.active {
				h2 {
					/* background-color: #E4E6E5; */
					padding-left: 20px;
					&::before {
						top: 0;
					}
				}
			}
		}
	}
	.right-nav-pane {
		width: calc(100% - 250px);
		padding-left: 50px;
		@media ${mqMax(breakpoints.xl - 1)} {
			width: 100%;
			padding: 0;
		}
	}
	.hero {
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
	.marquee {
		width: 100vw;
		height: 70px;
		overflow: hidden;
		padding: 23px 33px;
		display: flex;
		flex-flow: nowrap;
		color: #fff;
		.marquee__wrapper {
			display: flex;
			flex-flow: nowrap;
			justify-content: flex-start;
			-webkit-animation: scroll linear 30s infinite;
			-moz-animation: scroll linear 30s infinite;
			animation: scroll linear 30s infinite;
			span {
				user-select: none;
			}
		}

		@-moz-keyframes scroll {
			from {
						transform: translate3d(0,0,0)
			}
			to {
					transform: translate3d(-100%,0,0)
			}
		}

		@-webkit-keyframes scroll {
			from {
						transform: translate(0,0)
				}
				to {
						transform: translate(-100%,0)
				}
		}

		@keyframes scroll {
				from {
						transform: translate(0,0)
				}

				to {
						transform: translate(-100%,0)
				}
		}

		span {
			font-weight: 400;
			font-size: 20px;
			margin-right: 35px;
			white-space: nowrap;
			text-transform: uppercase;
			span {
				font-weight: 700;
				font-style: normal;
				margin-left: 5px;
			}
		}
	}

	.btn {
		padding: 22.5px 40px;
		font-family: 'Inter';
		text-align: center;
		position: relative;
		overflow: hidden;
		color: #fff;
		font-size: 14px;
		border: 1px solid ${colors.dark};
		font-weight: 600;
		cursor: pointer;
		border: none;
		/* background: linear-gradient(-45deg, #798B8C, #A0B39D); */
		background-size: 200% 200%;
		border-radius: 100px;
		display: inline-block;
		text-transform: uppercase;
		animation: gradient 2s ease infinite;
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 0%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		&--black {
			background: none;
			background-color: ${colors.dark};
		}

		.title-wrapper {
			height: 17px;
			overflow: hidden;
			span {
				display: block;
				transform: translateY(-100%);
				transition: transform .3s;
				white-space: nowrap;
			}
		}
		&:hover {
			box-shadow: 30px 30px 60px rgba(37, 91, 121, 0.15);
			transition: all .3s;
			.title-wrapper {
				span {
					transform: translateY(0%);
					transition: transform .3s;
				}
			}
		}
		&--outline {
			background: transparent;
			border: 1px solid #fff;
			color: #fff;
		}
	}

	.content-container {
		width: 100%;
		position: relative;
		max-width: 1220px;
		margin: 0 auto;
		@media (min-width: 700px) and (max-width: 1280px) {
			max-width: calc(100vw - 64px);
		}
		@media ${mqMax(breakpoints.md)} {
			width: calc(100vw - 40px);
		}
		&--contact {
			max-width: 800px;
			text-align: center;
			@media (min-width: 700px) and (max-width: 992px) {
				max-width: calc(100vw - 64px);
			}
		}
	}
	h1 {
		font-size: 55px;
		line-height: 66px;
		font-family: 'Krona One';
		font-weight: 400;
		span {
			font-weight: 300;
			font-style: italic;
		}
		@media ${mqMax(breakpoints.md)} {
			font-size: 30px;
			line-height: 36px;
		}
	}

`;
