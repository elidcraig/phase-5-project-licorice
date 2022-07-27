import React, { useState } from 'react';
import {
  Stack,
  Image,
  HStack,
  Heading,
  OrderedList,
  ListItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Textarea
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { 
  AiFillHeart,
  AiOutlineHeart,
  AiFillClockCircle,
  AiOutlineClockCircle,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar
} from 'react-icons/ai'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function ReleaseInfo({ release, currentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [review, setReview] = useState('')

  const postFavoriteRelease = async () => {
    const response = await fetch('/favorite_releases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ release_id: release.id, user_id: currentUser.id })
    })
    const data = await response.json()
  }

  const postSavedRelease = async () => {
    const response = await fetch('/release_saves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ release_id: release.id, user_id: currentUser.id })
    })
    const data = await response.json()
  }

  const postReview = async () => {
    const config = {
      user_id: currentUser.id,
      release_id: release.id,
      body: review
    }

    const response = await fetch('/release_reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })
    const data = await response.json()
    
  }

  return (
    <Stack >
      <Image boxSize='350px' src={ release.artwork_url } alt={ release.title }/>
      <HStack >
        <Icon as={ AiFillHeart } onClick={ postFavoriteRelease }/>
        <Icon as={ AiFillClockCircle } onClick={ postSavedRelease }/>
        <Icon as={ AiOutlinePlus } onClick={ onOpen }/>
      </HStack>

      <Modal isOpen={ isOpen } onClose={ onClose }>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea 
              value={ review }
              onChange={ (e) => setReview(e.target.value) }
              placeholder='Write your review here...'
              size='sm'
              resize='vertical'
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={ postReview }>POST</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Heading >{ release.title }</Heading>
      <Heading as='h4' size='md'>{ release.artist.name }</Heading>
      <HStack >
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarFill } />
        <Icon as={ BsStarHalf } />
      </HStack>
      <OrderedList >
        <ListItem>
          Tracknames here..
        </ListItem>
      </OrderedList>
    </Stack>
  );
}

export default ReleaseInfo;