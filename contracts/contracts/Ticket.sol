// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "@rarible/lazy-mint/contracts/erc-721/LibERC721LazyMint.sol";

contract Ticket is ERC721, RoyaltiesV2Impl {
  using Counters for Counters.Counter;

  /* Structs */
  struct Event {
    address payable creator;
  id: string;
  title: string;
    uint256 startDate;
    string metadata;
    bool active;
  childAddress: string;
  category: string[];
  image: Image;
  eventHost: string;
  fee: number;
  date: string;
  description: Desc;
  seats: number;
  owner: string;
  type: string;
  venue?: Venue;
  buyers: Array<string>;
  tickets_available: number;
  tickets_sold: number;
  link?: string;
  displayName?: string;
  profileImage?: string;
  }

  /* Variables */
  Counters.Counter private _tokenIds;

  /* Events */

  /* Constructor */
  constructor() ERC721("NFTicketize", "NFTICKET") {}

  /* Modifiers */
  //Modifier to check if event exist
  modifier eventExists(uint256 _eventId) {
    require(events[_eventId].exist, "Event does not exist.");
    _;
  }

  //Modifier to check if ticket category exist
  modifier ticketCategoryExist(uint256 _ticketCategory) {
    require(ticketCategories[_ticketCategory].exist, "Ticket category does not exist.");
    _;
  }

  //Modifier to check if ticket category is for that event
  modifier ticketCategoryEventExist(uint256 _eventId, uint256 _ticketCategory) {
    require(
      ticketCategories[_ticketCategory].eventId == _eventId,
      "Ticket category does not exist."
    );
    _;
  }

  // Modifier to check that the caller is the owner of event
  modifier onlyEventOwner(uint256 _eventId) {
    Event memory _event = events[_eventId];
    require(msg.sender == _event.creator, "Not event owner.");
    _;
  }

  // Modifier to check that the caller is not the owner of event
  modifier isNotEventOwner(uint256 _eventId) {
    Event memory _event = events[_eventId];
    require(msg.sender != _event.creator, "Caller is event owner.");
    _;
  }

  /* Functions */
}
