import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <Header className='flex justify-between items-center p-4 border-b-2'>
           <h1 className='text-4xl font-bold'>Knowledge Cafe</h1> 
           <img src={profile} alt="" />
        </Header>
    );
};

export default Header;