import { Flex } from 'components/common/flex/flex'
import { Spacing } from 'components/common/spacing/spacing'
import { BorderDashedIcon } from '@radix-ui/react-icons'

export function PostListFallback() {
  return (
    <Flex width="fill" justifyContent="center" alignItems="center">
      <Spacing size="5rem" />
      <BorderDashedIcon />
      <br />
      one moment please...
      <Spacing size="5rem" />
    </Flex>
  )
}
