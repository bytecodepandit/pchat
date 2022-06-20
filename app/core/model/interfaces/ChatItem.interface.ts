export default interface ChatItem {
  id: string;
  image: string;
  title: string;
  time: string;
  chatStatus: string;
  chatType: string;
  chatCommunicationType: string;
  content: string;
  status?: string;
}
