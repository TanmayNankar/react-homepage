import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Get yourself registered and Check out New Job Opening !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='C:\Users\shrut\react-homepage\src\images\Java.png'
              text='Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development.'
              label='Java'
              path='/services'
            />
            
            <CardItem
              src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Flaptop-c-letter-on-screen-260nw-503239204.jpg&imgrefurl=https%3A%2F%2Ficons8.com%2Ficon%2F40670%2Fc-programming&tbnid=FibLaSygNXPFnM&vet=12ahUKEwiVot_JtKjyAhX7s0sFHQCYBh8QMygcegUIARDyAQ..i&docid=wNn7EJm59u9VnM&w=260&h=280&q=c%20language%20logo%20image&hl=en&ved=2ahUKEwiVot_JtKjyAhX7s0sFHQCYBh8QMygcegUIARDyAQ'
              text='C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners. Our C tutorials will guide you to learn C programming one step at a time.'
              label='C Programming'
              path='/services'
            />
          
          </ul>
          <ul className='cards__items'>
          
            <CardItem
              src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F216-2166065_c-png-image-c-programming-language-logo-transparent.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FiTJwxox_c-png-image-c-programming-language-logo-transparent%2F&tbnid=EYLrIp4M91aS-M&vet=12ahUKEwiVot_JtKjyAhX7s0sFHQCYBh8QMygnegUIARCIAg..i&docid=F27Ro0UfCBeKxM&w=860&h=845&q=c%20language%20logo%20image&hl=en&ved=2ahUKEwiVot_JtKjyAhX7s0sFHQCYBh8QMygnegUIARCIAg'
              text='C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on.'
              label='C++'
              path='/services'
            />
           
            <CardItem
              src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fc1%2F7a%2Fa0c17a149e5e4d6624fee213f1d5c878.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F805440714578822526%2F&tbnid=i7OR8yid4fzSIM&vet=12ahUKEwi259q3tajyAhWxpksFHSC8Bk4QMygGegUIARC_AQ..i&docid=aQc9N-s9T0bxSM&w=320&h=310&q=html%20language%20logo%20image&hl=en&ved=2ahUKEwi259q3tajyAhWxpksFHSC8Bk4QMygGegUIARC_AQ'
              text='
              HTML is short for HyperText Markup Language and is the language of the World Wide Web. It is the standard text formatting language used for creating and displaying pages on the Web. HTML documents are made up of two things: the content and the tags that format it for proper display on pages.'
              label='HTML'
              path='/products'
            />
           
            <CardItem
              src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1280px-React-icon.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AReact-icon.svg&tbnid=8IgH0NvjOSUUnM&vet=12ahUKEwjAjd7quajyAhUEAHIKHYEfCyQQMygAegUIARCpAQ..i&docid=nfz2qKo0MFLwMM&w=1280&h=905&q=react%20logo%20image&ved=2ahUKEwjAjd7quajyAhUEAHIKHYEfCyQQMygAegUIARCpAQ'
              text='React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
              label='React'
              path='/sign-up'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;