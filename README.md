# Rock-Paper-Scissors-Lizard-Spock - just like in The Big Bang Theory!

This minigame was made by Salerys, for the second portfolio project at Code Institute.
The game is played against the computer, and a round goes until someone reaches 10 points.
Can you beat the opponent?

The live link can be found here - [Rock-Paper-Scissors-Lizard-Spock](https://salerys.github.io/rock-paper-scissors/)

![Rock-Paper-Scissors-Lizard-Spock Am I Responsive Image](./assets/docs/responsive.jpg)

## Site Goals
The goal of the site is to let people pass time with something light-hearted and fun, whether they are at home, on public transport, on a break during work, etc. RPSLS is a perfect game for this.

### My Goals as the Site Owner
To give people easy access to something easy, fast and fun for when they need.

### As an User, I want
To be able to have a quick play either against "the computer", or friends without having to prepare tedious tasks, create something on my own, or bring physical games with me in my everyday life. 

## Design

### Imagery
Since this is a game most people know, and even those who don't know can get quickly into it with the rules, I have decided to use a clean, not overcomplicated design.

### Colours

The colour scheme of the website is blue, so it's easy on the eye and doesn't take away the attention of the player. The buttons are simplistic, as the focus of the site is the game itself.

### Fonts

The Josefin-sans font family was used throughout the whole website. I stumbled upon this font while searching for something a bit more soft and fitting to the mental image I had.
The Josefin-sans font can be found at Google-fonts for free.

## Wireframes

Wireframes were produced using Balsamiq.

<details>

 <summary>Desktop Wireframe</summary>

![Desktop Wireframe](./assets/docs/balsamiq-computer.jpg)
 </details>
 <details>
    <summary>Mobile Wireframe</summary>

![Mobile Wireframe](./assets/docs/balsamiq-phone.jpg)
 </details>

 ## Features

The site contains all necessary features of a simple, functioning RPSLS game.

### Existing Features

- **A player name input field right under the Heading**
    - The first thing the user sees
    - Gives information to the user about the goal of the website
    - Allows the user to enter their desired name

    ![input](./assets/docs/name-input.jpg)


- **Scoreboard**
    - Located below the name input field
    - Shows the user the moves they used, as well as the opponent's chosen move
    - Shows the current score under the user/cpu icon
    - Announces the winner upon either side reaching 10 wins

    ![scoreboard](./assets/docs/scoreboard.jpg)


**Game buttons**
- The five moves available in RPSLS
- Allows the user to freely choose their next move
- The reset game button allows the user to start anew anytime

    ![intro section](./assets/docs/game-buttons.jpg)

**Rules**
- The official rules to RPSLS

    ![intro section](./assets/docs/rules.jpg)

### Planned future features
- Online multiplayer, allowing the user to play against other people
- Adding background animation
- Better button icons
- Background music with toggle option
- Other "gamemode goals", since currently the only one is "win 10 times"

## Validator Testing

- ### HTML
    - No errors were returned when passing through the official W3C Markup Validator
    - [W3C Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsalerys.github.io%2Frock-paper-scissors%2F)

- ### CSS
    - No errors found with the official W3C CSS Validator
    - [W3C CSS Validator Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsalerys.github.io%2Frock-paper-scissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - ![CSS validator success image](./assets/docs/css-validator.jpg)

- ### Accessibility
    - The site achieved a Lighthouse score of 99%
    - ![Lighthouse score](./assets/docs/lighthouse-test.jpg)

- ### Feature Testing
     The name input field has been tested that it shows the input name correctly, as well the five move choices, victory upon 10 win, and the reset option.

- ### Browser Testing
     The site has been tested on IE, Chrome, Firefox and Opera GX browsers without major issues.

- ### Device Testing
    The website was viewed on multiple devices to ensure responsiveness on various screen sizes. Everything performed as intended.
    Responsiveness was also checked using Opera GX developer tools across multiple devices for the various sizes.

    I also used the following websites to test responsiveness:
    - [Responsinator](http://www.responsinator.com/?url=https%3A%2F%2Fsalerys.github.io%2Frock-paper-scissors%2F)
    - [Am I Responsive](https://ui.dev/amiresponsive?url=https://salerys.github.io/rock-paper-scissors/)
    - [AmIResponsive](https://amiresponsive.co.uk)


    