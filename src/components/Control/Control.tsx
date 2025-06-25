import './Control.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@popperjs/core/dist/umd/popper.min.js';

function Control() {
    // Removed setupControl call to prevent conflict with App.tsx
    // The App component will handle API initialization

    return (
        <>
            {/* Menu and main layout structure from control-template.html */}
            {/* <div className="at-menu">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-bars fa-2x"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="./control.html">Control</a></li>
                        <li><a className="dropdown-item" href="./alphatex-editor.html">AlphaTex Editor</a></li>
                        <li><a className="dropdown-item" href="../test-data/test-results.html">Visual Test Results</a></li>
                    </ul>
                </div>
            </div> */}
            <div className="at-wrap loading">
                <div className="at-overlay">
                    <div className="at-overlay-content">
                        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status"></div>
                    </div>
                </div>
                <div className="at-content">
                    <div className="at-sidebar">
                        <div className="at-sidebar-content">
                            <div className="at-track-list"></div>
                        </div>
                    </div>
                    <div className="at-viewport">
                        <div className="at-canvas" id="alphaTab"></div>
                    </div>
                </div>
                <div className="at-footer">
                    <div className="at-waveform d-none">
                        <div className="at-waveform-cursor"></div>
                    </div>
                    <div className="at-time-slider">
                        <div className="at-time-slider-value"></div>
                    </div>
                    <div className="at-player">
                        <div className="at-player-left">
                            <a href="#" className="at-stop disabled" data-bs-toggle="tooltip" data-bs-placement="top" title="Stop">
                                <i className="fas fa-step-backward"></i>
                            </a>
                            <a href="#" className="at-play-pause disabled" data-bs-toggle="tooltip" data-bs-placement="top" title="Play/Pause">
                                <i className="fas fa-play"></i>
                            </a>
                            <div className="btn-group dropup">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search"></i>
                                    <span className="at-speed-label">1x</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu at-speed-options">
                                    <a className="dropdown-item" href="#">0.25x</a>
                                    <a className="dropdown-item" href="#">0.5x</a>
                                    <a className="dropdown-item" href="#">0.75x</a>
                                    <a className="dropdown-item" href="#">0.9x</a>
                                    <a className="dropdown-item" href="#">1x</a>
                                    <a className="dropdown-item" href="#">1.1x</a>
                                    <a className="dropdown-item" href="#">1.25x</a>
                                    <a className="dropdown-item" href="#">1.50x</a>
                                    <a className="dropdown-item" href="#">2x</a>
                                </div>
                            </div>
                            <div className="at-player-loading progress">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center font-weight-bold">
                                    <span className="progress-value-number">0</span><sup className="small">%</sup>
                                </div>
                            </div>
                            <div className="at-song-details">
                                <span className="at-song-title"></span> -
                                <span className="at-song-artist"></span>
                            </div>
                            <div className="at-time-position" data-bs-toggle="tooltip" data-bs-placement="top" title="Time Position"></div>
                        </div>
                        <div className="at-player-right">
                            <div className="btn-group dropup at-output-device">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Output Device: Default">
                                    <i className="fas fa-headphones"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Default</a>
                                </div>
                            </div>
                            <a href="#" className="at-count-in disabled" data-bs-toggle="tooltip" data-bs-placement="top" title="Count-In">
                                <i className="fas fa-hourglass-half"></i>
                            </a>
                            <a href="#" className="at-metronome disabled" data-bs-toggle="tooltip" data-bs-placement="top" title="Metronome">
                                <i className="fas fa-edit"></i>
                            </a>
                            <a href="#" className="at-loop disabled" data-bs-toggle="tooltip" data-bs-placement="top" title="Loop">
                                <i className="fas fa-retweet"></i>
                            </a>
                            <a href="#" className="at-print" data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                                <i className="fas fa-print"></i>
                            </a>
                            <a href="#" className="at-download" data-bs-toggle="tooltip" data-bs-placement="top" title="Download GP">
                                <i className="fas fa-download"></i>
                            </a>
                            <a href="#" className="at-download-audio" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Audio Data">
                                <i className="fas fa-file-audio"></i>
                            </a>
                            <div className="btn-group dropup">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search"></i>
                                    <span className="at-zoom-label">100%</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right at-zoom-options">
                                    <a className="dropdown-item" href="#">25%</a>
                                    <a className="dropdown-item" href="#">50%</a>
                                    <a className="dropdown-item" href="#">75%</a>
                                    <a className="dropdown-item" href="#">90%</a>
                                    <a className="dropdown-item" href="#">100%</a>
                                    <a className="dropdown-item" href="#">110%</a>
                                    <a className="dropdown-item" href="#">125%</a>
                                    <a className="dropdown-item" href="#">150%</a>
                                    <a className="dropdown-item" href="#">200%</a>
                                </div>
                            </div>
                            <div className="btn-group dropup">
                                <button type="button" className="btn dropdown-toggle at-layout-button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Layout
                                </button>
                                <div className="dropdown-menu dropdown-menu-right at-layout-options">
                                    <a className="dropdown-item" href="#" data-layout="horizontal-screen">
                                        <i className="far fa-caret-square-right"></i> Horizontal Layout (Off-Screen)
                                    </a>
                                    <a className="dropdown-item" href="#" data-layout="horizontal-bar">
                                        <i className="fas fa-caret-square-right"></i> Horizontal Layout (Bar Wise)
                                    </a>
                                    <a className="dropdown-item" href="#" data-layout="page">
                                        <i className="fas fa-caret-square-down"></i> Vertical Layout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Track template as a React fragment, not a <template> */}
            <template id="at-track-template">
                <div className="at-track">
                    <div className="at-track-icon">
                        <i className="fas fa-guitar"></i>
                    </div>
                    {/* <span className="at-track-name">{{name}}</span> */}
                    <div className="at-track-controls">
                        <button type="button" className="btn btn-sm btn-outline-danger at-track-mute">Mute</button>
                        <button type="button" className="btn btn-sm btn-outline-success at-track-solo">Solo</button>
                        <i className="fas fa-volume-up"></i>
                        <input type="range" min="0" max="16" value="8" className="at-track-volume" />
                    </div>
                </div>
            </template>
        </>
    )
}

export default Control