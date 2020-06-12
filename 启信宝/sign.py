n=b'RBClRPl0RRJimiCiBeClCRBClRPl0RRJimiCiBeClC'
s='/api/risk/bytypeandid/api/risk/bytypeandid{"id":"5d8c0f7279112e7a5501208b","type":2}'


t=s.encode('utf-8')



import hmac
import hashlib
sign = hmac.new(n,t, hashlib.sha512).hexdigest()
print(sign)
