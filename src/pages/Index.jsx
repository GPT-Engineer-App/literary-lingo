import { Container, Text, VStack, HStack, Box } from "@chakra-ui/react";

const englishText = ["Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'", "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.", "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a Watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."];

const chineseText = ["爱丽丝开始觉得坐在河岸边的姐姐旁边非常无聊，无所事事：她曾经一两次偷看姐姐正在读的书，但书里没有图画或对话，‘一本没有图画或对话的书有什么用呢？’爱丽丝想。", "于是她在心里考虑（尽可能地，因为炎热的天气让她感到非常困倦和愚蠢），编一条雏菊链的乐趣是否值得起身摘雏菊的麻烦，突然一只粉红眼睛的白兔跑到她身边。", "这没什么特别的；爱丽丝也不觉得听到兔子自言自语‘哦，天哪！哦，天哪！我要迟到了！’有什么不对（事后她想起这件事时，觉得自己应该对此感到惊讶，但当时一切都显得很自然）；但当兔子真的从背心口袋里掏出一块表，看了看，然后匆匆忙忙地走了，爱丽丝跳了起来，因为她突然想到，她以前从未见过一只兔子有背心口袋，或者从里面掏出一块表，出于好奇，她跑过田野追赶它，幸运的是，她正好赶上看到它钻进篱笆下的一个大兔子洞里。"];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={4}>
      <VStack spacing={8}>
        {englishText.map((paragraph, index) => (
          <HStack key={index} spacing={8} align="start">
            <Box width="50%">
              <Text fontSize="lg">{paragraph}</Text>
            </Box>
            <Box width="50%">
              <Text fontSize="lg">{chineseText[index]}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
