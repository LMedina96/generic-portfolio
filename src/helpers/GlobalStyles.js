import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .body {
    background-color: ${(props) => props.theme.background};
  }

  .principal {
    background-color: ${(props) => props.theme.backgroundPrincipal};
  }

  .fonts, .nav-item a:hover {
    color: ${(props => props.theme.color)};
  }

  a, .cvButton, .nav a, .nav-item {
    color: ${(props => props.theme.colorLinks)};
    border-color: ${(props => props.theme.borderColorLinks)};
  }

  a:hover {
    color: ${(props => props.theme.colorLinksHover)};
  }

  .cvButton:hover, .nav-item:hover {
    background-color: ${(props => props.theme.colorLinksHover)};
    border-color: ${(props => props.theme.borderColorLinks)};
  }

  .card {
    background-color: ${(props => props.theme.backgroundCard)};
  }

  .card-title {
    color: ${(props => !props.theme.color)};
  }

  .vertical-timeline-element-content, .vertical-timeline-element-icon {
    background-color: ${(props => props.theme.backgroundTimeline)};
    color: ${(props => props.theme.color)};
  }

  .vertical-timeline-element-content-arrow {
    border-right: ${(props => props.theme.arrowTimeline)};
  }

  .toggleTheme {
    color: ${(props) => props.theme.toggleTheme}
  }

`;