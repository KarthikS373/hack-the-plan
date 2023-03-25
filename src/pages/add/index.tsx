import { Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useState } from "react"
import Hero from "../../components/layout/event-add/add-event-hero"
import First from "../../components/layout/event-add/first"
const Second = dynamic(() => import("../../components/layout/event-add/second"), {
  ssr: false,
})
const Third = dynamic(() => import("../../components/layout/event-add/third"), {
  ssr: false,
})
const Fourth = dynamic(() => import("../../components/layout/event-add/fourth"), {
  ssr: false,
})
const LastStep = dynamic(() => import("../../components/layout/event-add/last"), {
  ssr: false,
})

import { useRecoilState, useRecoilValue } from "recoil"
import { inviteOnlyAtom, stepAtom, formDetails, dropDownForm } from "../../lib/recoil/atoms"
import EventCreatedModal from "../../components/Modals/created-event"

import { Event, VenueType } from "../../types/event"
const eventData: Event = {
  id: "",
  title: "",
  childAddress: "",
  category: {
    event_type: "",
    category: [""],
  },
  image: {
    image: "",
    gallery: [],
    video: "",
  },
  eventHost: "",
  fee: 0,
  date: "",
  description: {
    short_desc: "",
    long_desc: "",
  },
  seats: 0,
  owner: "",
  type: "",
  tickets_available: 0,
  tickets_sold: 0,
  buyers: [],
  link: "",
  displayName: "",
  profileImage: "",
}

const Create: NextPage = () => {
  const [step, setStep] = useRecoilState(stepAtom)
  const [event, setEvent] = useState<Event>(eventData)
  const [eventLink, setEventLink] = useState<any>(undefined)
  const [txnId, setTxnId] = useState<string | null>(null)
  const [isPublished, setIsPublished] = useState(false)
  const [inTxn, setInTxn] = useState<boolean>(false)
  const [child, setChild] = useState<any>("")

  return (
    <>
      <Head>
        <title>PlannerPal | Host</title>
      </Head>
      <EventCreatedModal
        isPublished={isPublished}
        event={event}
        child={child}
        eventLink={eventLink}
      />
      <Box position="absolute" minH="100vh" w="full" h="full" overflow="scroll" overflowX="hidden">
        <Hero step={step} setStep={setStep} />
        <Box mt="6">
          <Box display={step === 0 ? "block" : "none"}>
            <First
              onSubmit={(formDetails: any) => {
                setEvent({
                  ...event,
                  ...formDetails,
                })
                setStep(1)
              }}
            />
          </Box>
          <Box display={step === 1 ? "block" : "none"}>
            <Second
              event={event}
              onSubmit={(formDetails: any) => {
                setEvent({
                  ...event,
                  ...formDetails,
                })
                setStep(2)
              }}
            />
          </Box>
          <Box display={step === 2 ? "block" : "none"}>
            <Third
              event={event}
              onSubmit={(formDetails: any) => {
                setEvent({
                  ...event,
                  ...formDetails,
                })
                setStep(3)
              }}
            />
          </Box>
          <Box display={step === 3 ? "block" : "none"}>
            <Fourth
              event={event}
              onSubmit={(link: any, huddle: boolean, venue: VenueType) => {
                setStep(4)
                setEvent({
                  ...event,
                  link,
                  venue: venue,
                })
              }}
            />
          </Box>

          <Box display={step === 4 ? "block" : "none"}>
            <LastStep event={event} inTxn={inTxn} onSubmit={() => {}} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Create
