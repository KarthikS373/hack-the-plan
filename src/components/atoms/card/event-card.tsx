import moment from "moment"
import NextImage from "next/image"
import { useRouter } from "next/router"
import { FaStar } from "react-icons/fa"
import twoDigit from "two-digit"

import { AspectRatio, Box, Flex, Image, Link, Text } from "@chakra-ui/react"

interface EventCardProps {
  event: Events
  isFeatured?: boolean
  previewOnly?: boolean
}

const EventCard = ({ event, isFeatured = false }: EventCardProps) => {
  const router = useRouter()
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ]

  return (
    <Flex
      direction="column"
      onClick={() => {
        router.push(`/event/${event.childAddress}`)
      }}
      rounded="lg"
      overflow="hidden"
      bg="white"
      _hover={{ transform: "translateY(-7px) scale(1.02);" }}
      _active={{ transform: "scale(1.03)" }}
      transitionDuration="200ms"
      cursor="pointer"
      boxShadow="0px -4px 52px rgba(0, 0, 0, 0.11)"
      w="full"
      border="1px"
      position="relative"
      h={["18rem", "20rem"]}
      borderColor="blackAlpha.200"
    >
      <Flex position="absolute" top="2" left="2" zIndex={2}>
        {isFeatured && (
          <Flex
            mr="2"
            zIndex={2}
            rounded="full"
            fontSize="10px"
            fontWeight="medium"
            pr="2"
            pl="0.5"
            justify="center"
            alignItems="center"
            gridGap="1"
            py="0.5"
            bg="white"
            color="blackAlpha.700"
          >
            <Flex
              p="1"
              alignItems="center"
              justify="center"
              bg="brand.gradient"
              rounded="full"
              color="white"
              fontSize="10px"
            >
              <FaStar />
            </Flex>
            <Text> Featured</Text>
          </Flex>
        )}
        <Flex
          zIndex={2}
          rounded="full"
          fontSize="10px"
          fontWeight="semibold"
          px="2"
          justify="center"
          alignItems="center"
          gridGap="1"
          py="0.5"
          bg="white"
          color="blackAlpha.700"
        >
          {event.fee === 0 ? (
            <>
              FREE
              <Image ml={2} src={"/images/coin.png"} w="3" filter="brightness(100%)" alt="cost" />
            </>
          ) : (
            <>
              <Image src={"/images/coin.png"} w="3" filter="brightness(100%)" alt="cost" />
              <Text>
                <>{event.fee}</>
              </Text>
            </>
          )}
        </Flex>
      </Flex>
      <Flex zIndex={2} position="absolute" top="2" right="2" gridGap="2" color="blackAlpha.600">
        <Box rounded="full" fontSize="10px" fontWeight="semibold" px="2" py="0.5" bg="white">
          {event.category.event_type}
        </Box>
        <Box rounded="full" fontSize="10px" fontWeight="semibold" px="2" py="0.5" bg="white">
          {Array(event.category.category).join(" & ")}
        </Box>
      </Flex>
      <AspectRatio ratio={428.42 / 180.98} w="full" bg="gray.100">
        <NextImage
          loading="lazy"
          layout="fill"
          objectFit="cover"
          src={
            (event.image.gallery.length > 0 &&
              event.image.gallery[0].slice(0, -3).concat("webp")) ||
            "/image/gradient.png"
          }
          alt="event image"
        />
      </AspectRatio>
      <Flex direction="column" w="full" justify="space-between" h="full">
        <Flex p={{ base: "3", xl: "4" }} alignItems="center">
          <Box
            textAlign="center"
            borderRight="2px"
            borderColor="blackAlpha.200"
            px="2"
            pr="5"
            h="fit-content"
            mr="6"
          >
            <Text
              fontSize={{ base: "xs", xl: "sm" }}
              fontFamily="body"
              fontWeight="bold"
              color="brand.peach"
            >
              {months[moment(event.date.split("T")[0].split(":").join("/")).get("month")]}
            </Text>
            <Text fontSize={{ base: "lg", xl: "xl" }} color="brand.black600" fontWeight="medium">
              {twoDigit(moment(event.date.split("T")[0].split(":").join("/")).get("date"))}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "sm", xl: "lg" }}
              fontWeight="semibold"
              noOfLines={2}
              color="brand.black600"
            >
              {event.title}
            </Text>
            <Flex
              color="blackAlpha.700"
              fontSize={{ base: "10px", xl: "xs" }}
              gridGap="1"
              mb="1"
              align="center"
              justify={event.venue ? "space-evenly" : "flex-start"}
            >
              <Text>by</Text>
              <Link
                fontWeight="600"
                noOfLines={1}
                fontSize="11.6px"
                _hover={{ color: "brand.black600" }}
              >
                {(event.owner?.length > 20
                  ? event.owner?.substring(0, 6) +
                    "..." +
                    event.owner?.substring(event.owner?.length - 6)
                  : event?.owner) || "Anonymous"}
              </Link>

              {event.venue && (
                <>
                  <Text mx="1px" px="0">
                    •
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize="11.6px"
                    lineHeight="13.61px"
                    letterSpacing="1%"
                    color="#EF24246E"
                    noOfLines={1}
                  >
                    {typeof event.venue === "string"
                      ? JSON.parse(event.venue).name
                      : event.venue.name}
                  </Text>
                </>
              )}
            </Flex>
            <Text
              mt="2"
              color="blackAlpha.500"
              fontFamily="body"
              fontSize={{ base: "xs", xl: "sm" }}
              noOfLines={2}
            >
              {event.description.short_desc}
            </Text>
          </Box>
        </Flex>
        <Box>
          <Flex justify="end">
            <Box
              bg="white"
              rounded="full"
              p="1"
              px="3"
              roundedRight="none"
              transform="translateY(-4px)"
              w="fit-content"
              fontSize={{ base: "xx-small", xl: "xs" }}
              boxShadow="0px 6.36032px 39.752px rgba(0, 0, 0, 0.07)"
            >
              {event.seats - event.tickets_sold > 0 ? (
                <Flex gridGap="1">
                  {event.seats >= 10000000 ? null : (
                    <>
                      <Text
                        fontWeight="bold"
                        style={{
                          background:
                            "-webkit-linear-gradient(360deg, #95E1FF 0%, #E7B0FF 51.58%, #FFD27B 111.28%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {event.tickets_sold}/{event.seats}
                      </Text>
                      <Text color="blackAlpha.500">Tickets Sold</Text>
                    </>
                  )}
                </Flex>
              ) : (
                <Flex align="center" gridGap="1">
                  <Flex
                    color="white"
                    ml="-1.5"
                    bg="brand.gradient"
                    rounded="full"
                    p="1"
                    justify="center"
                    align="center"
                  >
                    <FaStar />
                  </Flex>
                  <Text
                    color="blackAlpha.500"
                    fontWeight="bold"
                    style={{
                      background:
                        "-webkit-linear-gradient(360deg, #95E1FF 0%, #E7B0FF 51.58%, #FFD27B 111.28%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SOLD OUT!
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
          {event.seats >= 10000000 ? null : (
            <Flex w="full" h="5" bg="brand.gradient" mt="-4" justify="end">
              <Box w={`${100 - (event.tickets_sold / event.seats) * 100}%`} h="full" bg="gray.50" />
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default EventCard
