import MotionCenter from "@/components/Atom/MotionCenter";
import Footer from "@/components/Organism/Footer";
import Header from "@/components/Organism/Header";
import Sidebar from "@/components/Organism/Sidebar";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function DefaultLayout({ p, children }: IDefaultLayoutProps) {
  return (
    <>
      <Box position="fixed" w="100%" zIndex={10} top={0} m={0} p={0}>
        <Header />
      </Box>
      <Container
        maxW="full"
        flexGrow={1}
        px={{ base: 0, lg: p === undefined ? 0 : p }}
      >
        {children}
      </Container>

      <Footer />
    </>
  );
}
