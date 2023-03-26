# Web3vents

## Introduction

Web3vents, a platform for NFT based ticketing which makes hosting events and gathering participants easy for anyone! The platform has a simple and modern UI which anyone can easily navigate and host their events on.

## Configuration

1. First, make sure you have Node.js and npm (Node Package Manager) installed on your computer, You can check this by running the following commands in your terminal:

```
    node -v
    npm -v
```

> Read docs here [Node.js Documentation](https://nodejs.org/en/docs/)

2. Once you have npm installed you can run the following both to install and upgrade Yarn

```
    npm install --global yarn
    yarn --version
```

> Read docs here [Yarn Installation guide](https://classic.yarnpkg.com/lang/en/docs/install)

## Installation

1. Clone the News-Unchained project from GitHub

```
    git clone https://github.com/KarthikS373/hack-the-plan
```

2. Once the project is cloned, navigate into the project directory and run the following command to install all the necessary dependencies:

```
    yarn install
```

3. Finally, to start the development server, run the following command in your terminal:

```
    yarn dev
```

> This will start the development server and you should be able to see your project running at [`http://localhost:3000`](http://localhost:3000) in your browser.

## Details

### Notable Points

 - **Reduce carbon footprint**: The project focuses on reducing the carbon footprint of event management by promoting green and efficient ticketing. This reduces the need for physical tickets, which in turn reduces the carbon emissions from paper production, printing, and transportation.

 - **Eliminate black market tickets**: The project aims to eliminate the black market for tickets, which often leads to overproduction of tickets and wastage of resources. By ensuring that each ticket is sold at the correct price, the project ensures that only the required number of tickets are produced, leading to a reduction in waste.

 - **Decentralization**: By using a decentralized platform for event management, the project reduces the need for large centralized servers and data centers that consume large amounts of energy. This approach leads to a more sustainable future by reducing energy consumption and promoting a distributed model of computing.

 - **Appwrite integration**: The project integrates Appwrite to provide a secure and efficient platform for event management. Appwrite is an open-source backend server that provides authentication, database management, and storage services. These integrations reduce the need for multiple third-party services, leading to a more streamlined and sustainable platform.

 - **Royalty program**: The project introduces a royalty program that rewards event creators who adopt sustainable practices in their events. This incentivizes event creators to focus on sustainable practices, leading to a more sustainable future.
  
 - **Automated workflows**: The project uses automated workflows to manage different aspects of the event planning process, such as vendor selection, contract negotiation, and payment processing. This reduces the need for manual intervention and makes the process more efficient.

## Technologies used

### Appwrite
 - Appwrite is used to **store files and images** that are associated with events. This feature allows event organizers to easily upload and manage media files associated with their events. 
 - It is also used to manage the **database** for our platform. This includes storing and retrieving event data, managing user data, and handling other aspects of the platform's **data management**.

### Twilio
  - Twilio is used as a communication tool to **verify contact details** using OTP. Also the API is used to **send event reminders** to attendees before the event starts. This is a great way to ensure that attendees do not forget about the event and show up on time. 
  - Twilio is also used send **NFT redeeming steps** to the contact mail so that the attendee can redeem the tickets without any hassle.
  - It can also be used to implement **Customer support** in case the attendees have any questions or issues regarding the event they can contact the organizer. 
  - Twilio is also used to send **Event Analytics and Notifications** to the organizer

### Typeform
 - Interested candidates are provided with a **typeform** to fill. The data from the typeform is then stored onto the database which can be fetched to the event host to distribute tickets to.

### Polygon

 - **Low transaction fees**: Transactions on Polygon are significantly cheaper compared to other blockchain networks, making it an ideal choice for applications that require frequent and low-cost transactions.

 - **Fast transaction times**: Polygon's architecture is designed to allow for fast confirmation times, ensuring that transactions are processed quickly and efficiently.

 - **Scalability**: Polygon is built with a focus on scalability, allowing for the platform to handle a large number of transactions without slowing down or experiencing network congestion.

 - **Interoperability**: The Polygon network is designed to be interoperable with other blockchain networks, allowing for seamless integration with other decentralized applications.


### NextJS and ChakraUI
 - ChakraUI provides a fast and easy way to build the various components used in the website. We have made different screens using ChakraUI and have used NextJS framework and typescript for the base code.

### Github
 - **Code management**: GitHub is used to manage the source code for the Web3vents project. Developers use Git, a distributed version control system, to make changes to the codebase, and then push those changes to GitHub.

 - **Collaboration**: GitHub allows multiple developers to collaborate on the same codebase. Developers can create branches to work on specific features or bug fixes, and then merge those branches back into the main codebase.

 - **Pull requests**: GitHub's pull request system allows developers to submit changes to the codebase for review by other team members. Pull requests can be discussed and reviewed before they are merged into the main codebase.

### Hardhat

 - **Development Environment**: Hardhat provides a local development environment that allows developers to write and test their smart contracts before deploying them on the Polygon chain.

 - **Contract Compilation**: Hardhat includes a Solidity compiler that enables developers to compile their smart contracts into bytecode that can be executed on the Polygon chain. Developers can specify the compiler version and optimize their code for gas efficiency.

## Contributors

Karthik S - Blockchain Developer and Backend Setup

Gaurav Kabra - Frontend UI and Backend Integration