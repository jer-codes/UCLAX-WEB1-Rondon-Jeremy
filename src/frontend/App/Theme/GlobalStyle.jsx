import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${({ theme: { fontWeights, colors } }) => {
        return css`
            html,
            body {
                margin: 0;
                font-family: "Arial", "Helvetica", sans-serif;
                font-weight: ${fontWeights.regular};
            }
            body {
                overflow-y: scroll;
                background-color: ${colors.primary.default};
                color: ${colors.secondary.light};
                min-width: 300px;
                font-size: 16px;
                line-height: 1.5;
                font-family: "Arial", "Helvetica", sans-serif;
            }

            * {
                box-sizing: border-box;
                font-family: "Arial", "Helvetica", sans-serif;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-weight: ${fontWeights.bold};
                margin: 0px 0px 14px;
                color: ${colors.secondary.light};
                font-family: "Arial", "Helvetica", sans-serif;
            }

            p {
                font-weight: ${fontWeights.regular};
                margin: 0px 0px 28px;
                font-size: 16px;
                font-family: "Arial", "Helvetica", sans-serif;
            }
            li {
                font-size: 14px;
                margin-bottom: 5px;
                p {
                    margin-bottom: 5px;
                }
            }

            h1,
            h2 {
                font-weight: 700;
            }
            h3,
            h4 {
                font-weight: 500;
            }
            h5,
            h6 {
                font-weight: 400;
            }

            h1 {
                font-size: 50px;
            }
            h2 {
                font-size: 40px;
            }
            h3 {
                font-size: 30px;
            }
            h4 {
                font-size: 25px;
            }
            h5 {
                font-size: 20px;
            }
            h6 {
                font-size: 18px;
            }

            table {
                border: solid 1px ${colors.primary.light};
                border-collapse: collapse;
                width: 100%;
                margin: 20px 0px;

                th,
                td {
                    border: solid 1px ${colors.primary.light};
                    padding: 5px;
                    vertical-align: top;
                }
            }

            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                border: 0;
            }

            nav {
                ul {
                    padding: 0px;
                    margin: 0px;

                    li {
                        display: inline-block;
                        list-style-type: none;
                        margin: 0px;
                    }
                }
            }

            nav.content {
                margin: 30px 0px;

                a {
                    display: inline-block;
                    margin-right: 5px;
                    line-height: 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    color: ${colors.primary.default};
                    background-color: ${colors.secondary.light};
                    border-bottom: solid 3px transparent;

                    &:hover {
                        border-bottom-color: ${colors.primary.default};
                        &.active {
                            border-bottom-color: transparent;
                        }
                    }

                    &.active {
                        color: ${colors.secondary.light};
                        background-color: ${colors.primary.default};
                    }
                }
            }
        `;
    }}

`;

export default GlobalStyle;
