# Cryptocurrency command line interface status application (cryptostats)

command line interface for cyptocurrencies

## Version

1.0.7

## Useage

### System Requirements

[Node Js](https://nodejs.org/en/, "Download Node Js")

### Commands

Get help

```bash
   npx cryptostats --help
```

Set API key from [Nomics](https://nomics.com/)

```bash
   npx cryptostats key set
```

Get API Key

```bash
   npx cryptostats key get
```

Remove API Key

```bash
   npx cryptostats key remove
```

Check cryptocurrency price <br>
options

- --base : CSV values of the currency symbols defaults to BTC,ETH,XRP
- --quote : currency symbol, defaults to USD

```bash
   npx cryptostats check price
```

Check DOGE against Naira

```bash
   npx cryptostats check price --base DOGE --NGN
```

## App Info

### Author

Adegorite Afolabi David [twitter](https://twitter.com/story_of_afro)

### License

This project is licensed under the MIT License
