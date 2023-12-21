"use client";
import React from 'react';
import { LabelStatus, Typography } from "ui/components";
import { useHelloWorld } from "ui/hooks";

const Home = () => {
    const { text } = useHelloWorld();
    return (
        <div>
            <h1>Home Campus Management</h1>
            <button>Click Me!</button>
            <h1>{text} from hooks global</h1>
            <LabelStatus text="Visi Prima Nusantara" type="active" />
            <Typography.Title size="lg" fontWeight="semibold">Visi Prima Nusantara </Typography.Title>
            <Typography.Text size="xl" fontWeight="bold" >Campus Management</Typography.Text>
        </div>
    );
};

export default Home;
