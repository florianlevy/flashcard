import styled from 'styled-components'

interface IconStyleProps {
	size?: string
}

export const Icon = styled.div<IconStyleProps>`
	display: flex;
	svg {
		fill: url(#color-gradient-svg);
		width: ${(props) => props.size ?? '25px'};
	}
  .cls-1{ fill:none; }
`
