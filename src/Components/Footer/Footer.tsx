import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Links: LinkType[] = [
  { title: "Get Help By issue" },
  { title: "Get Help By Location" },
  { title: "Contact Us" },
];

export type LinkType = {
  title: string;
};


const Footer: React.FC = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(Links[0].title);
  // const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  const NavLink = ({ children }: { children: LinkType }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.300", "gray.800"),
      }}
      bg={
        selectedTab === children.title
          ? useColorModeValue("gray.200", "gray.700")
          : "none"
      }
      onClick={() => {
        setSelectedTab(children.title);
        if (children.title === "Home") {
          router.push("/");
        } else if(children.title==="Get Help By issue"){
          router.push("/Files/Ghbi");
        }
        else  {
          router.push(`/Files/${children.title}`);
        }
      }}
    >
      {children.title}
    </Link>
  );


  return (
    <Container mt="5" maxW="100%" zIndex={2}>
      <Divider />
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="center"
        align={"center"}
        py={{ base: "12", md: "16" }}
      >
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="12">
            <Image
              src="/301px-Emblem_of_India.png"
              height="150px"
              filter="auto"
              invert={colorMode === "light" ? 0 : 1}
            />
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="md" fontWeight="semibold" color="subtle">
                Police Women Safety Wing
              </Text>
              <Stack spacing="3" shouldWrapChildren p="0px 8px 0px 8px">
                <Stack direction="row" spacing={4} align="center">
                  <Icon fontSize={20} as={MdLocationOn} />
                  <Text
                    flexWrap="wrap"
                    fontWeight={"normal"}
                    fontSize={14}
                    variant="link"
                  >
                    Plot-21, Jasola Institutional Area, New Delhi - 110025
                  </Text>
                </Stack>
                <Stack direction="row" spacing={4} align="center">
                  <Icon as={BsFillTelephoneFill} />
                  <Text
                    flexWrap="wrap"
                    fontWeight={"normal"}
                    fontSize={14}
                    variant="link"
                  >
                    011 - 26942369, 26944740, 26944754, 26944805
                  </Text>
                </Stack>
                <Stack direction="row" spacing={4} align="center">
                  <Icon as={FaWhatsapp} />
                  <Text fontWeight={"normal"} fontSize={14} variant="link">
                    9416267893
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="md" fontWeight="semibold" color="subtle">
                Get Help
              </Text>
            
            <HStack spacing={8} alignItems={"center"}>
            <HStack
              // as={"nav"}
              // fontWeight={700}
              // spacing={4}
              display={{ base: "none",md:"flex"  }}
             
            >
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
             

              <Stack spacing="3" shouldWrapChildren>
                {/* <Text fontSize={'sm'} cursor="pointer" _hover={{textDecoration: "underline"}} flexWrap={'wrap'}>Get Help by Issue</Text>
                <Text fontSize={'sm'} cursor="pointer" _hover={{textDecoration: "underline"}} flexWrap={'wrap'}>Get Help by Location</Text>
                <Text fontSize={'sm'} cursor="pointer" _hover={{textDecoration: "underline"}} flexWrap={'wrap'}>Contact Us</Text> */}
                {/* <ul>
      <li>
        <Link href="/Temp">Get help by issue</Link>
      </li>
      <li>
        <Link href="/about">Get help by location</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Contact Us</Link>
      </li>
    </ul> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          All rights reserved &copy; 2021 - {new Date().getFullYear()} | Central
          Police – Women Safety Wing.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="Youtube"
            icon={<FaYoutube fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
};

export default Footer;
