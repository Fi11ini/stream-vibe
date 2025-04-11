import './Button.scss';

const Button = (props) => {
    const {
        type = 'button',
        href,
    } = props;

    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button';
    const linkProps = {href};
    const buttonProps = {type};
    const specificProps =isLink ? linkProps : buttonProps

    return (
        <Component {...specificProps}>

        </Component>
    );
};


export default Button;