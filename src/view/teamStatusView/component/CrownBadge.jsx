import crownIcon from '/src/assets/images/logo/crown.png'; // Assume you have a crown image file

const CrownBadge = ({children}) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.crownContainer}>
                <img src={crownIcon} alt="Crown" style={styles.crownIcon}/>
            </div>
            {children}
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%'
    },
    crownContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(50%, -50%)',
        zIndex: 1,
    },
    crownIcon: {
        width: '40px', // Adjust size as needed
        height: '40px',
        rotate: '35deg',
    },
};

export default CrownBadge;
