import React, { useEffect } from 'react';
import { useState } from 'react';
import initialFireBaseApp from '../FireBase/fireBase.init';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";



initialFireBaseApp();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // declear useState as needed 
    const [user, setUser] = useState({});
    const [food, setFood] = useState([]);
    const [contactForm, setContactForm] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState('');



    // google signIn implement 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            }).catch(error => {
                setError(error.message)
            })
    };



    // signIn implement  
    const signIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            }).catch(error => {
                setError(error.message)
            })
    };



    // logout inplement 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message)
            })
    };


    // set onAuthChanged as if the login stay untill logout
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setError(error.message)
            }
        })
    }, []);



    // call data from the public folder 
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setFood(data)).catch(error => {
                setError(error)
            })
    }, []);



    // increment/decrement quantity 
    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    };
    const decrementQuantity = () => {
        const newQuantity = quantity - 1;
        if (quantity <= 1) {
            return;
        }
        setQuantity(newQuantity);
    };



    // add to cart section 
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    };


    // Submit form details 
    const submitInfo = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const region = e.target.region.value;
        const city = e.target.city.value;
        const area = e.target.area.value;
        const address = e.target.address.value;
        setContactForm({
            contactInfo: {
                name: name,
                phone: phone,
                region: region,
                city: city,
                area: area,
                address: address
            }
        })
    };




    return {
        user,
        food,
        error,
        cart,
        logOut,
        signIn,
        quantity,
        addToCart,
        submitInfo,
        contactForm,
        incrementQuantity,
        decrementQuantity,
        googleSignIn
    }

};

export default useFirebase;