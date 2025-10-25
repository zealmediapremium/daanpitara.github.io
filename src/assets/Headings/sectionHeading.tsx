import React from 'react';

interface HeadingProps {
    heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <div className="flex content-center items-center w-full text-center">
            <h1 className="mx-auto text-center text-xxl font-bold font-open-type font-family-italic">
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
