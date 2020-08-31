import React from 'react'
import {
  Grid,
  Accordion,
  Icon,
  Image,
} from 'semantic-ui-react'

export default class GuidesPage extends React.Component {

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    const { activeIndex } = this.state

    return (
      <Grid style={{ padding: '2em' }} centered stackable>
        <Grid.Row>
          <Accordion styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
              style={{ fontSize: '1.25em', color: '#6435c9' }}
            >
              <Icon name='dropdown' />
              What do I need to use the application?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - A computer running Google Chrome or Firefox browser</p>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - A digital wallet</p>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Ethereum, a digital currency</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
              style={{ fontSize: '1.25em', color: '#6435c9' }}
            >
              <Icon name='dropdown' />
              I already have Google Chrome browser or Firefox installed. What next?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Good. You now need a digital wallet which you can download from <a target='_blank' rel='noopener noreferrer' href='https://metamask.io/download.html'>here</a>. As a blockchain newcomer, MetaMask wallet allows you to connect and interact with many blockchain applications.</p>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - After installing MetaMask wallet, MetaMask icon will appear on the upper right corner of your browser, that looks like the below image. Click on the icon and follow the instructions to create your unique wallet.</p>
              <Image src='https://ipfs.io/ipfs/QmdsEtw5NHBMPJ2USPP3r8BCR7aBuyft8LoF2Yrmb4VRWy' size='tiny' />
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Once you have successfully created your wallet, you will acquire a wallet address with a format like this one('0x7f42226E0aB236Ebc578C642AdF2D0C7CE0A7FbB') but not the same. This is your public key and can be shared. You will also acquire a private key which you and only you should have access to it. WE WILL NOT EVEN ASK FOR YOUR PRIVATE KEY! NEVER DISCLOSE IT TO ANYONE! If you share your private key, anyone can use your funds. And also without the private key, you cannot access your own funds. KEEP IT SAFE AND CLOSE TO YOU!</p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
              style={{ fontSize: '1.25em', color: '#6435c9' }}
            >
              <Icon name='dropdown' />
              Can I use a smartphone to connect and interact with blockchain applications?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Yes. MetaMask supports both Android and IOS users. Install <a href='https://metamask.io/download.html' target='_blank' rel='noopener noreferrer'>MetaMask Browser</a>. Use built-in browser to browse blockchain applications. However, MetaMask for mobile is still in beta version. </p>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Since taxa is in beta, we currently don't support a wide array of wallets. But we will iterate and integrate more wallets as we work towards simplicity in user wallets preference.</p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
              style={{ fontSize: '1.25em', color: '#6435c9' }}
            >
              <Icon name='dropdown' />
              Where can I get Ethereum; the digital curreny?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - SINCE THIS IS A BETA VERSION, WE HIGHLY DISCOURAGE USING REAL ETHER! HOWEVER, WE CAN HELP YOU GET FAKE ETHER TO TEST AGAINST THIS APPLICATION ON RINKEBY TEST NETWORK. PROCEED TO <a href='https://www.rinkeby.io/#faucet' target='_blank' rel='noopener noreferrer'>Get Fake Ether</a>. Your request for fake ether will reflect in your wallet. DON'T BE GREEDY! </p>
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - Since taxa smart contracts are deployed to rinkeby testnet, we encourage you to change your network to rinkeby in order to get fake ether and interact with the smart contracts.</p>
              <Image
                src='https://ipfs.io/ipfs/QmWNzMM3ANkFyRrLYM5B8gxfthFswhWRm4h7qsNJmw885d'
                size='medium'
              />
              <Image
                src='https://ipfs.io/ipfs/QmVoxn8DhrRePuhNFBJYEukjmqnp4t6Vk1EdQrtjTr1Xko'
                size='medium'
                style={{ marginTop: '1.5em' }}
              />
              <p style={{ fontSize: '1em', textAlign: 'left' }}> - However, since we are gearing towards main network launch, you can start accumulating Ether from exchange sites. One non-custodial peer-to-peer exchange site is <a href='https://localcryptos.com/' target='_blank' rel='noopener noreferrer'>LocalCryptos</a>.</p>
            </Accordion.Content>
          </Accordion>
        </Grid.Row>
      </Grid>
    )
  }
}

