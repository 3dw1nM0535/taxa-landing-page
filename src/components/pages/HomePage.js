import React from 'react'
import {
  Grid,
  Header,
  Image,
  Button,
  Icon,
  Divider,
  Segment,
  Container,
  List,
} from 'semantic-ui-react'

export function HomePage ({mobile}) {
  return (
    <>
      <Grid style={{ paddingTop: '1em', paddingBottom: '4em', minHeight: 500 }} columns={2} verticalAlign='middle' centered container stackable>
          <Grid.Column>
            <Header
              as='h1'
              style={{
                fontSize: mobile ? '1.5em' : '3em',
                fontWeight: 'normal'
              }}
            >
              Decentralized, accountable, and community-sponsored agriculture on the blockchain.
            </Header>
            <Button
              style={{ marginTop: '2.5em' }}
              color='violet'
              size='huge'
            >
              Launch PoC App
              <Icon name='right arrow' />
            </Button>
            <p style={{ color: 'red', fontSize: '2em', fontWeight: 'bold' }}>This is a Proof of Concept App. Not the final version. Please don't use real money on it!</p>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Image
              verticalAlign='middle'
              rounded
              size={mobile ? 'small' : 'medium'}
              src='https://ipfs.io/ipfs/QmPFB1oDm49AMCHpB3atKieZ1iE6jw8abuSZemzGMz4o42'
            />
          </Grid.Column>
      </Grid>

      <Grid centered columns={4} stackable verticalAlign='middle' style={{ paddingBottom: '3em' }}>
        <Divider fitted section />
        <Grid.Row style={{ paddingTop: '1em', paddingBottom: '1em' }}>
          <Grid.Column style={{ margin: '2em 2em' }} textAlign='center'>
            <Image
              centered
              src='https://ipfs.io/ipfs/QmbRXCmhXSrueGHiqL9d1PXsnPDXvH9aqiXgWTsC21akpt'
              size='tiny'
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>Minimize food wastage on farms by cutting off middlemen and intermediaries and by planting at the right season.</p>
          </Grid.Column>
          <Grid.Column style={{ margin: '2em 2em' }} color='violet' textAlign='center'>
            <Image
              centered
              src='https://ipfs.io/ipfs/QmQ8G2pSrPYwtRLoB3QUwnJE8aqA7gLZgrSvBmKd5hESp5'
              size='tiny'
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>Achieve food security by opening up farms to modern agriculture using emerging technologies and community-sponsored agriculture.</p>
          </Grid.Column>
          <Grid.Column style={{ margin: '2em 2em' }}textAlign='center'>
            <Image
              centered
              src='https://ipfs.io/ipfs/QmPTk4LmCFvvJVsUN9Z1SnaDka8qsohhMs5G9JG44fPuAS'
              size='tiny'
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>Digital, decentralized, and un-censored marketplace running on the blockchain. Book harvest without middlemen and intermediaries.</p>
          </Grid.Column>
          <Grid.Column color='violet' textAlign='center' style={{ margin: '2em 2em' }}>
            <Image
              centered
              src='https://ipfs.io/ipfs/QmZS76ntWuCDGeZEgiHtPNfanj6qzLrDrVGrbcDGow5ekH'
              size='tiny'
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>Trace farm products to their farm, farmer, and location. We are bringing accountability to farming using decentralized protocols.</p>
          </Grid.Column>
          <Grid.Column textAlign='center' style={{ margin: '2em 2em' }}>
            <Image
              src='https://ipfs.io/ipfs/QmdDJkoifq2kujB4MFsAWqxkvArJ117WZbQJtpP6XnL1vT'
              size='tiny'
              centered
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>As a buyer, your funds are securely locked in a smart contract code running on the blockchain until goods are received. No unscrupulous fees.</p>
          </Grid.Column>
          <Grid.Column color='violet' textAlign='center' style={{ margin: '2em 2em' }}>
            <Image
              src='https://ipfs.io/ipfs/QmY75Ck5PAWKNabCvGBdAngQbC5tx5SWh2gqbgHggKPgXW'
              size='tiny'
              centered
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>You can release funds to the farmer for any amount of harvest booked is received. You can also cancel any amount of your harvest bookings.</p>
          </Grid.Column>
          <Grid.Column textAlign='center' style={{ margin: '2em 2em' }}>
            <Image
              src='https://ipfs.io/ipfs/QmdGLX6xJL4i3u3aArbrRSLmBGxxj2MCyaGYaBqZ1F4N8j'
              size='tiny'
              centered
            />
            <p style={{ fontSize: '1.5em', padding: '1em 1em' }}>As a farmer, get paid in a new kind of money known as cryptocurrency. As a buyer, process payment without any overhead fees.</p>
          </Grid.Column>
          <Grid.Column textAlign='center' style={{ margin: '2em 2em' }}>
            <p style={{ fontSize: '1.5em' }}>Give it a try</p>
            <Button
              color='violet'
              size='large'
              as='a'
            >
              Launch PoC App
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid stackable inverted>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as='h4' inverted content='About' />
                <List link inverted>
                  <List.Item>
                    <List.Icon name='twitter' />
                    <List.Content>
                      <a href='https://twitter.com/taxaprotocols' target='_blank' rel='noopener noreferrer'>Twitter</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='telegram' />
                    <List.Content>
                      <a href='https://t.me/taxaimprovements' target='_blank' rel='noopener noreferrer'>Telegram</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='discord' />
                    <List.Content>
                      <a href='https://discord.gg/U3a8rX' target='_blank' rel='noopener noreferrer'>Discord</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>
                      <a href='mailto:taxaprotocols@gmail.com' target='_blank' rel='noopener noreferrer'>Contact Us</a>
                    </List.Content>
                  </List.Item>
                  <List.Item style={{ marginTop: '2em' }}>
                    <List.Content>&copy; taxa 2020</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  )
}

