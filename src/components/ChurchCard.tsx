import React from 'react';

interface ChurchCardProps {
    name: string;
    address: string;
    description: string;
}

const ChurchCard: React.FC<ChurchCardProps> = ({ name, address, description }) => {
    return (
        <div className="church-card">
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{description}</p>
        </div>
    );
};

export default ChurchCard;