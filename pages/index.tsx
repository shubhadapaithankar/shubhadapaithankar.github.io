import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/me.webp"
          alt="Shubhada Paithankar"
          width={120}
          height={120}
          className={styles.image}
        />
        <Title>Shubhada Paithankar</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          Devops/SRE Engineer | AWS | Azure | GCP | Kubernetes | Docker | Jenkins | Terraform | Ansible | Git | Linux
        </Title>
      </Container>
      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            I&apos;m a Full Stack Software Engineer with expertise in DevOps, SRE, Software Development and Machine Learning
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">
          I&apos;m actively looking for job opportunities. If you think I&apos;m a good fit for your team, I&apos;d love to hear from you!
        </Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          gridTemplateColumns={['1fr', 'repeat(1, 1fr)']}
          justifyItems="stretch"
          alignItems="stretch"
        >
          <Link href="mailto:shubhadapaithankar@gmail.com">
            <Button width="100%">
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👋
              </motion.span>{' '}
              Say hello
            </Button>
          </Link>
          {/*<Link*/}
          {/*  target="_blank"*/}
          {/*  href="https://calendly.com/antoine-ordonez/intro"*/}
          {/*>*/}
          {/*  <Button*/}
          {/*    width="100%"*/}
          {/*    backgroundColor="rgb(226,232,240)"*/}
          {/*    color="black"*/}
          {/*    variant="secondary"*/}
          {/*  >*/}
          {/*    Schedule a meeting*/}
          {/*  </Button>*/}
          {/*</Link>*/}
        </Grid>
      </Container>
    </Container>
  </Container>
);

export default Home;
