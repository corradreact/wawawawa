
import { Router, useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const Crud = () => {
   
    const router = useRouter();
    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <h2>Bil / Senarai Bil</h2>
                </div>
            </div>
            <div className="col-12">
                <div className="card" onClick={() =>  router.push("/bill/cukai")} >
                    <h5>Cukai</h5>
                    <span>Senarai bil Cukai Taksiran</span>
                </div>
            </div>
            <div className="col-12">
                <div className="card" onClick={() =>  router.push("/bill/lesen")} >
                    <h5>Lesen</h5>
                    <span>Senarai bil Lesen</span>
                </div>
            </div>
        </div>
    );
};

export default Crud;
