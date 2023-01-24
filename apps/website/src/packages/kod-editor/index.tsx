// export {default as KodEditor} from './KodEditor'

import Editor from "./editor"
import Header from "./Header"
import KodLayout from 'kod-layout'
import ProblemDescription from "./ProblemDescription"
import Terminal from "./Terminal"
import Head from "next/head"

export const KodEditor = () => {
    return (
        <>
            <Head>
                <style global>{`
                .kl-split {
                    display: flex;
                    align-items: stretch;
                    flex-direction: row;
                }
                
                .gutter {
                    background-color: #eee;
                    background-repeat: no-repeat;
                    background-position: 50%;
                }
                
                .gutter.gutter-horizontal {
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
                    cursor: col-resize;
                }
                .gutter.gutter-vertical {
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
                    cursor: row-resize;
                }
                .header {
                    height: 50px;
                    box-shadow: 0px 1px 3px 0px #36363650;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                }
                .container {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .root {
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }
                
                .split {
                    height: 100% !important;
                }
                
                .editor {
                    height: 100%;
                }
                
                .kod-md {
                    height: 100%;
                    overflow: auto;
                }
                .kl-header {
                    display: flex;
                    width: 100%;
                }
                .kl-row, .kl-column {
                    height: unset !important;
                    flex-grow: 1 !important;
                    overflow: auto !important;
                }
                .kc-editor {
                    position: fixed;
                    inset: 0;
                    height: 100vh;
                    width: 100vw;
                    overflow: hidden;
                }
                /* width */
                ::-webkit-scrollbar {
                width: 4px;
                }

                /* Track */
                ::-webkit-scrollbar-track {
                background: #ffffff50;
                }

                /* Handle */
                ::-webkit-scrollbar-thumb {
                    background: #ffffffaa;
                    border-radius: 10px;
                }

                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                background: #fff;
                }

                .kl-base {
                    background-color: #282c34;
                }
                `}</style>
            </Head>
            <div className="kc-editor">
                <KodLayout.Base>
                    <Header />
                    <KodLayout.Row gutterSize={10} minSize={400}>
                        <ProblemDescription />
                        <KodLayout.Column gutterSize={10}>
                            <Editor />
                            <Terminal />
                        </KodLayout.Column>
                    </KodLayout.Row>
                </KodLayout.Base>
            </div>
        </>

    )
} 