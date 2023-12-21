"use client";
import React from 'react';
import {LabelStatus, Typography} from "ui/components";


const Home = () => {
    return (
        <div>
            <h1>Home Frontend College</h1>
            <button>Click Me</button>
            <LabelStatus text="Visi Prima Nusantara" type="active" />
            <Typography.Title size="lg" fontWeight="semibold">Visi Prima Nusantara </Typography.Title>
            <Typography.Text size="xl" fontWeight="bold" >Frontend Campus</Typography.Text>
        </div>
    );
};

export default Home;
