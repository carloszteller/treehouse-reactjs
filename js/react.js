/* React.createElement */
// const title = React.createElement(
//     'h1',
//     {
//         id: 'main-title'
//     },
//     'My First React Element!'
// );

/* JSX */
// const title = <h1>My First react Element!</h1>;
const title = 'My First react Element!';

/* React.createElement */
// const description = React.createElement(
//     'p',
//     null,
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
// );

/* JSX */
// const description = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>;
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

/* React.createElement */
// const header = React.createElement(
//     'header',
//     null,
//     title, description
// );

/* JSX */
const header = (
    <header>
        <h1>{title}</h1>
        <p>{description}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);