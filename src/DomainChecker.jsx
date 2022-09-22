import React from 'react'

function DomainChecker() {
    return (
        <>
            <div className="domain-checker-main">
                <div className="domain-checker-header">
                    <h1>
                        Find the perfect domain name
                    </h1>
                </div>
                <div className="domain-checker-para">
                    <p>
                    Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)
                    </p>
                </div>
                <div className="domain-checker-search">
                 <input  type="text" placeholder='Type in that perfect Domain Name' name="" id=""  />
                 <button>Search</button>
                </div>
            </div>
        </>
    )
}

export default DomainChecker
