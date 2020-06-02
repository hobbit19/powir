import React from "react";
const { ipcRenderer } = window.require('electron')


function AboutWindow(props) {
    function showOriginalReport() {
        ipcRenderer.send("show-original-report", {status: true})
    }
    function exportJSON() {
        ipcRenderer.send("export-JSON-data", {status: true})
    }
    function exportPDF() {
        props.toggleInformationWindow()
    }
    return (
        <div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3">
                <div className="w-full">
                    <div className='pt-4 pb-6 border-bottom'>
                        <div className="flex">
                            <img className='no-border mr-2' src="assets/images/pdf.png" alt='pdf'/>
                            <h3>Export Report (PDF)</h3>
                        </div>
                        <p className='mt-2'>
                            Export the current report of your system from Powir in PDF format:
                        </p>
                        <button className="mt-4 btn-success" onClick={exportPDF}>Export PDF</button>
                    </div>
                    <div className='pt-4 pb-6 border-bottom'>
                        <div className="flex">
                            <img className='no-border mr-2' src="assets/images/code-file.png" alt='code-file'/>
                            <h3>Export Data (JSON)</h3>
                        </div>
                        <p className='mt-2'>
                            Export the parsed and processed data of your system from Powir in JSON format:
                        </p>
                        <button className="mt-4 btn-secondary" onClick={exportJSON}>Export JSON</button>
                    </div>
                    <div className='pt-4 pb-6'>
                        <div className="flex">
                            <img className='no-border mr-2' src="assets/images/select-all.png" alt='select-all'/>
                            <h3>Original Report</h3>
                        </div>
                        <p className='mt-2'>
                            Shows original report generated by Windows using the command:
                            <kbd className='ml-1'>powercfg /batteryreport</kbd> in the terminal.
                        </p>
                        <button className="mt-4 btn-warning" onClick={showOriginalReport}>Display Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWindow
