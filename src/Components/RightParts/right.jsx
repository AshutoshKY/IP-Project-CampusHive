import React from 'react'
import { HStack, Avatar, Heading ,Text} from '@chakra-ui/react'
import "./right.css";
import { BsDot } from 'react-icons/bs';

export default function Right() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
    return (
        // <div style={{border:"1px solid red", width:"416px", margin:"auto", marginRight:"0px", position:"relative"}}>
            <div className='right' >
            {/* <div>
                <button>Get unlimited access</button>
            </div> */}
            {/* <div>
                <input type="text" id='search' placeholder="Search" />
            </div> */}
            <div className='li-tag'>
                <BsDot color='blue' size='60px'/>
                <span>Coding Contests</span>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Leet Code'  src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='s'>LeetCode Contests</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://leetcode.com/contest/')}>Contest Now!! ... Click Here</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Geeksfor Geeks' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='s'>GeeksForGeeks Contests</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://practice.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest')}>Code for Hire!!... Click Here</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Code Chef' src='https://bit.ly/broken-link' />
                    <Heading fontWeight={600} as='h5' size='s'>CodeChef Contests</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://www.codechef.com/contests')}>The CodeCHEF Contests!!… Click Here</Heading>
                
            </div>
            <div className='li-tag'>
                <BsDot color='green' size='60px'/>
                <span>Others Field Contests</span>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Mechanical Eng' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='s'>Mechanical Practice</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://www.indiabix.com/online-test/mechanical-engineering-test/')}>
  Mech Eng. Practice tests, Click Here
</Heading>
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Electrical E' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='s'>Electrical - Spark</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://www.metrotest.co.nz/how-and-why-test/types-of-tests/')}>Electronics tests!!... Click Here</Heading>
            {/* <Text fontSize='xs' mt={4} color="green.500" cursor="pointer"> See the full list</Text> */}
            </div>
            <div className='topic'>
                <HStack spacing='10px'>
                    <Avatar size='s' name='Buisness Finance' src='https://bit.ly/broken-link' />
                    <Heading as='h5' fontWeight={600} size='s'>Buisness & Finance</Heading>
                </HStack>
                <Heading as='h5' mt={2} style={{color:"#40128B"}} cursor="pointer" size='sm' onClick={() => openInNewTab('https://www.proprofs.com/quiz-school/story.php?title=basics-1-test')}>Skill Up - Buisness & Finance...Here</Heading>
            {/* <Text fontSize='xs' mt={4} color="green.500" cursor="pointer"> See the full list</Text> */}
            </div>
            <div className='topic'>
                <Heading as='h5' mt={2} cursor="pointer" size='sm'>More Coming Soon.........</Heading>
                <Text fontSize='l' mt={4} color="gray.600" cursor="pointer"> Coming Soon with Updates for More Fields including Pharmacy, Architecture, IT etc. with News Updates</Text>
            </div>
        </div>
        // </div>
    )
}
