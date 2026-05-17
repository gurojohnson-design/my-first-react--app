export function Profile() {
    return (
        <div>
        <Avatar
            size={100}
            person={{
                name: 'Lin Lanying', 
                imageId: '1bX5QH6',
            }}
        />
        <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}
        />
        <Avatar
            size={80}
            person={{
                name: 'August Johnson',
                imageId: 'OKS67lh'
            }}
        />
        </div>
    );
}


function Avatar({person, size}) {
    return (
        <img
            className='avatar'

            src='https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

            alt={person.name}

            width={size}

            height={size}
        />
    );
}