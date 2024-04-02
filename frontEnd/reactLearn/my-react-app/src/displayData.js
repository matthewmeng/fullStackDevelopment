import React from 'react';

const user = {
    name: 'Test M',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90,
};

export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className='avatar'
                src={user.imageUrl}
                alt={'Photo of '+user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

/*
style={{}} is not a special syntax, but a regular {} object inside the style={} JSX curly braces.
We can use the style attribute when our styles depend on JavaScript Variables.
 */